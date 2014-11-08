import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['friends-graph'],

	width: function () {
		return this.$().width();
	}.property(),

	height: function () {
		return this.$().height();
	}.property(),

	nodes: function () {
		var user = this.get('user');
		var nodes = this.get('connections').toArray();
		nodes.unshiftObject(user);
		return nodes
	}.property('user', 'connections.@each'),

	links: function () {
		return this.get('nodes').map( function (node, i) {
			return { source: 0, target: i, affinity: 100 }
		});
	}.property('nodes'),

	largest_affinity: function () {
		return d3.max(this.get('links'), function(d) { return d.affinity; })
	}.property('links.@each.affinity'),

	link_distance_scale: function () {
		var affinity = this.get('largest_affinity');
		return d3.scale.linear()
		.domain([0, affinity])
		.range([300, 50]);
	},


	buildGraph: function () {

		var width = this.get('width'),
		    height = this.get('height'),
		    nodes = this.get('nodes'),
		    links = this.get('links'),
		    root,
		    user,
		    users;

		var context = this
		var affinity = this.get('largest_affinity');

		var link_distance = d3.scale.linear()
				.domain([0, affinity])
				.range([300, 50]);	

		var force = d3.layout.force()
		    .nodes(nodes)
		    .links(links)
		    .size([width, height])
		    .charge(-500)
		    .linkDistance(function(d) { return link_distance(d.affinity) })
		    .linkStrength(0.5)
		    .on("tick", tick)
		    .start();

		var svg = d3.select("#" + this.get('elementId')).append("svg")
		    .attr("width", width)
		    .attr("height", height);

		var link = svg.selectAll(".link")
		      .data(links)
		    .enter().append("line")
		      .attr("class", "link")
		      .attr("stroke-opacity", 0);

		var node = svg.selectAll(".node")
		      .data(nodes)
		    .enter().append("g")
		      .attr("class", "node")
		      .attr("r", 4.5)
		      .attr("fill", 'orange')
		      .call(force.drag);

		var image = node.append("image")
		      .attr("xlink:href", function(d) {return d.get('pictureUrl');} )
		      .attr("x", -25)
		      .attr("y", -25)      
		      .attr("width", 50)
		      .attr("height", 50)
		      .attr("data-id", function(d) { return d.get('id') })
		      .style("opacity", 0);

		  image
			    .transition()
			    .duration(1500)
			    .style("opacity", 0.75);


		  image.on("mouseover", function() {
					context.mouseoverCallback(this, node);
		    });  	  
		    
		  image.on("mouseout", function() {
		  	context.mouseoutCallback(this, node);
	    });

		function tick() {
		  link.attr("x1", function(d) { return d.source.x; })
		      .attr("y1", function(d) { return d.source.y; })
		      .attr("x2", function(d) { return d.target.x; })
		      .attr("y2", function(d) { return d.target.y; });
			node.attr("transform", function(d) { 
				return "translate(" + d.x + "," + d.y + ")"; 
			});
		}

	},

	mouseoverCallback: function (mouseoverNode, allNodes) {
		var sc = this.findConnFromNode(mouseoverNode);
		this.set('selectedConnection', sc);

    d3.select(mouseoverNode).transition()
      .style("opacity", 1)  	          
      .duration(100); 
	},

	mouseoutCallback: function (mouseoverNode, allNodes) {
		this.set('selectedConnection', null);
	  d3.select(mouseoverNode).transition()
		  .style("opacity", 0.75)
		  .duration(100);
	},

	findConnFromNode: function (node) {
		var id = $(node).data('id').toString();
		return this.get('connections').findBy('id', id);
	},

	selectedConnectionChange: function () {
		var sc = this.get('selectedConnection');
		this.sendAction('selectedConnectionChanged', sc);
	}.observes('selectedConnection'),

	didInsertElement: function () {
		this.buildGraph();
	}

});
