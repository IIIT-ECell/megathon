$(document).ready(main);

function main() {
    $(".sponsor").each(( index, sponsorDiv ) => {
        /*
         * Using border radius as:
         * a 100-a b 100-b / x y 100-y 100-x
         * keep values bw 40-60
         */

        ranNums = [];

        for( let i = 0; i < 4; i++ )
            ranNums[i] = Math.random() * 30 + 35;

        const color = Math.floor(Math.random() * 0x444444 + 0x444444).toString(16);

        const [a, b, x, y] = ranNums;

        $(sponsorDiv).css({
            "border-radius": `${a}% ${100-a}% ${b}% ${100-b}% / ${x}% ${y}% ${100-y}% ${100-x}%`,
            "background": `#${'0'.repeat(6 - color.length)}${color}`
        });
    });
}
