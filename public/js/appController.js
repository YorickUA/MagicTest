var todoList=angular.module("ToDo",[]);
todoList.controller("ToDoCont", function($scope, $http){
   $scope.list = {};

   $http.get('/getTodos').then( function(response){
     $scope.list.items=response.data;
   })

   $scope.add=function(item){
     if (item){
       $http.post('/addTodo', {task:item}).then(function(response){
          if(response.status===200){
              $scope.list.items.push(response.data);
          }
       })
     }
   }

   $scope.delete=function(item){
     $http.delete('/removeTodo/'+item._id).then(function(response){
       if(response.status===200){
         var index=$scope.list.items.indexOf(item);
         $scope.list.items.splice(index, 1);
       }
     })
   }

   $scope.updateState=function(item){
     if(item.done){
      $http.put("/markDone/"+item._id).then(function(response){
        if (response.status!==200){
          item.done=!item.done;
        }
      })
    }else{
      $http.put("/markUndone/"+item._id).then(function(response){
        if (response.status!==200){
          item.done=!item.done;
        }
      })
    }
   }
})
