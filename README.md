# Truss-matrix-analysis

This webpage is made to compute the displacement, axial force and support reaction of a given truss.

#Input Parameters
The user is required to input the following values:
1. Joint data: Input the joint number, its x and y coordinate, x and y restrictions
2. Material data: Give a number and modulus of elasticity 
3. Cross-sectional area: Give a number and cross-sectional area of the members.
4. Member Data: Input the member number, beginning and end joint, number representing the material and cross-section
5. Load Data: Input the external load available to a given joint; both in x and y direction.

#Result
This program will show and print (upon user demand) the following result:
1. Joint Displacement of all joint that are not restricted
2. Member Axial force of all members
3. Support Reaction Forces of all the joints that are restricted.

#Limitations
1. This program does not give any figurative representation of the truss, yet.
2. Thermal coefficient is not taken under consideration.
3. You can't save the data you previously entered after refreshing the page, since no database is used in this.
