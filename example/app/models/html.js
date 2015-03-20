exports.definition = {
	config: {
		columns: {
		    "url": "string",
		    "src": "string",
		    "height": "string",
		    "width": "string",
		    "type": "string",
		    "class": "string",
		    "links": "string",
		    "text": "string",
		    "attribs": "string",
		    "id": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "html"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};