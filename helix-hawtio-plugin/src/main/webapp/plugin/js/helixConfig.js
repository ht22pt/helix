/**
 * @module Helix
 * @mail Helix
 *
 * The main entry point for the Helix Resource Controllermodule
 * can list all resources in a cluster by calling /clusters/{clusterName}/resourceGroups
 * able to add a resource to cluster
 *
 */

var Helix = (function(Helix) {

    Helix.HelixConfigController = function($scope, $http) {

        $http.get("http://localhost:8100/clusters")
            .success(function(data) {
                $scope.clusters = data;
                $scope.resource = null;
            })

        
		
		 //getting User Cluster Level Config 
        $scope.getClusterLevel = function(cluster) {
            $http.get("http://localhost:8100/clusters/" + cluster.clusterName+"/configs/cluster")
                .success(function(data) {
                    $scope.data = data;
                })
        }  
		
		//getting User Participant Level Config 
        $scope.getPariticipantrLevel = function(cluster) {
            $http.get("http://localhost:8100/clusters/" + cluster.clusterName+"/configs/pariticipant")
                .success(function(data) {
                    $scope.data = data;
                })
        }  
		
		//getting Resource Level Config 
        $scope.getResourceLevel = function(cluster) {
            $http.get("http://localhost:8100/clusters/" + cluster.clusterName+"/configs/resource")
                .success(function(data) {
                    $scope.data = data;
                })
        }  

        $scope.listClusters = function() {
            $http.get("http://localhost:8100/clusters")
                .success(function(data) {
                    $scope.clusters = data;
                    $scope.resource = null;
                })
        }
        
        
        
        $scope.go = function(cluster) {
		
		var e = document.getElementById("level");
		var l =e.options[e.selectedIndex].value;
		
		var c = document.getElementById("action");
		var a=c.options[c.selectedIndex].value;
		
		switch(l)
		{
			case "cluster":
			{
				
				switch(a)
				{
					case "get":
					$scope.getClusterLevel(cluster);
					break;
				
				}
			
			}
			
			case "participant":
			{
			
			
			
			
			}
			
			case "resource":
			{
		
		
		
		
			}
		}
            
        }
        



    };


    return Helix;

})(Helix || {});