// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
// we used break because all code execute after the case matched. 
// so need to break that.
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}