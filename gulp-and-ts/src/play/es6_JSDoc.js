// @ts -ch eck
'use strict';

class Polygon {
   /**
    * @type {number}
    * @private 
    */
   h;

   /**
    * @param height {number}
    * @param width {number | null}
    */
   constructor(height, width) {
      this.name = 'Polygon';
      this.h = height;
      this.width = width;
   }

   /**
    * @returns {number}
    */
   get height() {
      return this._height;
   }

   /**
    * @param h {number | null}
    */
   set height(h) {
      this._height = h;
   }
}

