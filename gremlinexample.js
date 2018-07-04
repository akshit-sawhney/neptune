const gremlin = require('gremlin');
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;

dc = new DriverRemoteConnection('ws://neptunedbcluster-0pjftpasmtdm.cluster-cbolhqgwtd96.us-east-1.neptune.amazonaws.com:8182/gremlin');

const graph = new Graph();
const g = graph.traversal().withRemote(dc);

g.V().limit(1).count().toList()
  .then(data => console.log(data))
  .catch(error => {
        console.log('ERROR', error);
    });