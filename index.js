const gremlin = require('gremlin');
const Graph = gremlin.structure.Graph;
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

const graph = new Graph();
const g = graph.traversal().withRemote(new DriverRemoteConnection('ws://localhost:8182/gremlin'));

g.V().values('name').toList()
  .then(data => console.log(data))
  .catch(error => {
        console.log('ERROR', error);
    });