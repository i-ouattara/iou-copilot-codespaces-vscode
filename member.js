function skillsMember() {
    var member = new Object();
    member.name = "John";
    member.age = 30;
    member.skills = ["HTML", "CSS", "JS"];
    member.print = function () {
        console.log(member.name + " is " + member.age + " years old and knows " + member.skills.join(", "));
    }
    return member;
}