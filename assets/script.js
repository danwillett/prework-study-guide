var alltopics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var topic = alltopics[Math.floor(Math.random() * alltopics.length)];


function listTopics() {
for(x = 0; x < alltopics.length; x++)
{
    console.log(alltopics[x])
}

}

function selectTopic() {

if (topic === 'HTML') {
 console.log("Let's study HTML!");
} else if (topic === 'CSS') {
 console.log("Let's study CSS!");
} else if (topic === 'Git') {
 console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
 console.log("Let's study JavaScript!");
} else {
 console.log('Please try again!');
}
}
console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();