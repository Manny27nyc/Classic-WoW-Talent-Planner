/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
import Vue from 'vue';

Vue.mixin({
    methods: {
        getImageFileName: name => name.replace("'", '')
            .replace(':', '')
            .replace(/ /g, '-')
            .replace('(', '')
            .replace(')', '')
            .toLowerCase() + '.jpg',
        isMobile () {
            let windowWidth = window.innerWidth;
            if (windowWidth <= 700) {
                return true;
            } else {
                return false;
            }
        }
    }
});
