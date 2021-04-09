class Elastic

{


constructor(bodyA,pointB)

{


    var options=
    {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.01,
        length:10
    }

this.elas = Constraint.create(options);
this.pointB = pointB;
World.add(world,this.elas);


}


fly()

{

this.elas.bodyA=null;


}

launch(bodyA)

{

this.elas.bodyA=bodyA;


}


attach(body){
    this.elas.bodyA=body;
 
     }



display()

{




    
}




































}