import asyncHandler from 'express-async-handler'
import Order from '/orderModel.js';

const addOrderItems= asyncHandler(async (req,res)=>{   
    const {side ,price}=req.body;  
    const order = new Order({
        side:side,
        price:price
      })

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);

      class Node
      {
          constructor(data)
          {
              this.data = data;
              this.left = null;
              this.right = null;
          }
      }
            
      const isTreeSymmetric = tree =>isTreeEqual(tree.left, tree.right)
        const Node = (value, left, right) => ({value, left, right})
        
        const tree1 =
          Node(1,
            Node(2,
              Node(3, Node(4), Node(5)),
              Node(3, Node(4), Node(5))),
            Node(2,
              Node(3, Node(4), Node(5)),
              Node(3, Node(4), Node(5))))
              
        
      console.log(isTreeSymmetric(tree1)) // true
      
      if(left == right){ //checking variable values
          if(isTreeSymmetric(tree1) == false)
          let result = Order.remove({_id: req.query._id}) //assuming we get an id in query
         this.removeNode(node, this.data)
        }
      
        const isTreeEqual = (x, y) => {
            if (x === undefined && y === undefined)
              return true
            else if (x === undefined || y === undefined)
              return false
            else if (x.value === y.value)
              return isTreeEqual(x.left, y.left) && isTreeEqual(x.right, y.right)
            else
              return false
    }


      removeNode(node, key)
      {
          // if the root is null then tree is 
          // empty
          if(node === null)
              return null;
        
          // if data to be delete is less than 
          // roots data then move to left subtree
          else if(key < node.data)
          {
              node.left = this.removeNode(node.left, key);
              return node;
          }
        
          // if data to be delete is greater than 
          // roots data then move to right subtree
          else if(key > node.data)
          {
              node.right = this.removeNode(node.right, key);
              return node;
          }
        
          // if data is similar to the root's data 
          // then delete this node
          else
          {
               // deleting node with no children
              if(node.left === null && node.right === null)
              {
                  node = null;
                  return node;
              }
        
              // deleting node with one children
              if(node.left === null)
              {
                  node = node.right;
                  return node;
              }
                
              else if(node.right === null)
              {
                  node = node.left;
                  return node;
              }
        
              // Deleting node with two children
              // minumum node of the rigt subtree
              // is stored in aux
              var aux = this.findMinNode(node.right);
              node.data = aux.data;
        
              node.right = this.removeNode(node.right, aux.data);
              return node;
          }
      }
    })    