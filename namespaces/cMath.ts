namespace x {
   const PI = Math.PI;

   export namespace circ {
      export function calcCircumference(diameter: number) {
         return diameter * PI;
      }

      export function calcArea(radius: number) {
         return PI * radius * radius;
      }
   }
}
