namespace x {
   // you can nest namespaces bu you must export from the parent
   export namespace rect {
      export function calcPerimeter(width: number, length: number) {
         return (width * 2) + (length * 2);
      }
      export function calcArea(width: number, length: number) {
         return width * length;
      }
   }
}