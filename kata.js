/**
 * Created by davehochstrasser on 8/16/16.
 */
function explode(str) {
    /*
     return str.replace("", " ");
     console.log("");{


     StringBuffer result = new StringBuffer();
     */
    //var i = 0;
    var result = "";
    for (var i = 0; i < str.length; i++) {
        result= result +str.substr(i,1);
        result = result + " ";
    }
    result.trim();
    return result.toString();
}
console.log("explode(\"example\") -> " + explode("example"));
console.log("explode(\"cat\") -> " + explode("cat"));
console.log("explode(\"\") -> " + explode(""));
console.log("explode(\"crampie\") -> " + explode("crampie"));
console.log("explode(\"chuck\") -> " + explode("chuck"));
console.log("explode(\"oxymoron\") -> " + explode("oxymoron"));

//console.log(explode("hello"));
function notString(str) {
    if (str.length >= 3 && str.substring(0, 3) == "not") {
        return str;
    }

    return "not " + str;
}
console.log();
console.log("notString(\"candy\") -> " + notString("candy"));
console.log("notString(\"x\") -> " + notString("x"));
console.log("notString(\"not bad\") -> " + notString("not bad"));
console.log("notString(\"not\") -> " + notString("not"));
console.log("notString(\"knot\") -> " + notString("knot"));
console.log("notString(\"wist\") -> " + notString("wist"));

function missingChar(str, n) {
    //var n = 0;
    front = str.substring(0, n );
    back = str.substring(n + 1, str.length);
    return front + back;
}
console.log();
console.log("missingChar(\"kitten\", 1) -> " + missingChar("kitten", 1));
console.log("missingChar(\"kitten\", 0) -> " + missingChar("kitten", 0));
console.log("missingChar(\"kitten\", 4) -> " + missingChar("kitten", 4));
console.log("missingChar(\"kitten\", 5) -> " + missingChar("kitten", 5));
console.log("missingChar(\"kitten\", 2) -> " + missingChar("kitten", 2));
console.log("missingChar(\"kitten\", 3) -> " + missingChar("kitten", 3));

function frontBack(str) {
    if (str.length <= 1){
        return str;

    }

    mid = str.substring(1, str.length - 1);


    return str.charAt(str.length - 1) + mid + str.charAt(0);
}
console.log();
console.log("frontBack(\"code\") -> " + frontBack("code"));
console.log("frontBack(\"a\") -> " + frontBack("a"));
console.log("frontBack(\"ab\") -> " + frontBack("ab"));
console.log("frontBack(\"pork\") -> " + frontBack("pork"));
console.log("frontBack(\"swine\") -> " + frontBack("swine"));
console.log("frontBack(\"boar\") -> " + frontBack("boar"));

function front3(str) {
    front;

    if (str.length >= 3) {
        front = str.substring(0, 3);
    } else {
        front = str;
    }
    return front + front + front;
}
console.log();
console.log("front3(\"Javascript\") -> " + front3("Javascript"));
console.log("front3(\"chocolate\") -> " + front3("chocolate"));
console.log("front3(\"abc\") -> " + front3("abc"));
console.log("front3(\"bob\") -> " + front3("bob"));
console.log("front3(\"oyster\") -> " + front3("oyster"));
console.log("front3(\"lick\") -> " + front3("lick"));

function backAround(str) {
    // Get the last char
    last = str.substring(str.length - 1);
    return last + str + last;
}
console.log();
console.log("backAround(\"cat\") -> " + backAround("cat"));
console.log("backAround(\"hello\") -> " + backAround("hello"));
console.log("backAround(\"a\") -> " + backAround("a"));
console.log("backAround(\"snarl\") -> " + backAround("snarl"));
console.log("backAround(\"movie\") -> " + backAround("movie"));
console.log("backAround(\"jimjim\") -> " + backAround("jimjim"));

function front22(str) {
    var take = 2;
    if (take > str.length) {
        take = str.length;
    }
    front = str.substring(0, take);
    return front + str + front;
}
console.log();
console.log("front22(\"kitten\") -> " + front22("kitten"));
console.log("front22(\"ha\") -> " + front22("ha"));
console.log("front22(\"abc\") -> " + front22("abc"));
console.log("front22(\"kitkat\") -> " + front22("kitkat"));
console.log("front22(\"room\") -> " + front22("room"));
console.log("front22(\"gerry\") -> " + front22("gerry"));

function delDel( str) {
    if (str.length >= 4 && str.substring(1, 4)==("del")) {
        return str.substring(0, 1) + str.substring(4);
    }
    return str;
}
console.log();
console.log("delDel(\"adelbc\") -> " + delDel("adelbc"));
console.log("delDel(\"adelhello\") -> " + delDel("adelhello"));
console.log("delDel(\"adedbc\") -> " + delDel("adedbc"));
console.log("delDel(\"adeldel\") -> " + delDel("adeldel"));
console.log("delDel(\"adelsol\") -> " + delDel("adelsol"));
console.log("delDel(\"adelmen\") -> " + delDel("adelmen"));

function startOz( str) {
    result = "";

    if (str.length >= 1 && str.charAt(0) == 'o') {
        result = result + str.charAt(0);
    }

    if (str.length >= 2 && str.charAt(1) == 'z') {
        result = result + str.charAt(1);
    }

    return result;
}
console.log();
console.log("startOz(\"ozmandias\") -> " + startOz("ozmandias"));
console.log("startOz(\"bzoo\") -> " + startOz("bzoo"));
console.log("startOz(\"oxx\") -> " + startOz("oxx"));
console.log("startOz(\"kitten\") -> " + startOz("kitten"));
console.log("startOz(\"ozone\") -> " + startOz("ozone"));
console.log("startOz(\"bozo\") -> " + startOz("bozo"));

function endUp( str) {
    if (str.length <= 3)
        return str.toUpperCase();
    var cut = str.length - 3;
    front = str.substring(0, cut);
    back = str.substring(cut);

    return front + back.toUpperCase();
}
console.log();
console.log("endUp(\"hello\") -> " + endUp("hello"));
console.log("endUp(\"hi there\") -> " + endUp("hi there"));
console.log("endUp(\"hi\") -> " + endUp("hi"));
console.log("endUp(\"higher\") -> " + endUp("higher"));
console.log("endUp(\"joker\") -> " + endUp("joker"));
console.log("endUp(\"jamm\") -> " + endUp("jamm"));


