// import {IsValidURL} from './checkURL'

// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('article-url').value

//     if(Client.IsValidURL(formText)) {
//     console.log("::: Form Submitted :::")

//     postData('http://localhost:8060/api', {url: formText})

//     .then(function(res) {
//         document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(res.score_tag);
//         document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
//         document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
//         document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
//         document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
//     })
//     } else {
//         alert('Seems like an invalid URL, please try with a valid URL.');
//     }
// }

// const postData = async (url = "", data = {}) => {
//     console.log('Analyzing:', data);
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         mode: 'cors',
//         headers: {
//         'Content-Type': 'application/4 json',
//         },
//         body: JSON.stringify(data)
//     });
//     try {
//         const newData = await response.json();
//         console.log('Data received:', newData)
//         return newData;
//     } catch (error) {
//         console.log('error', error);
//     }
// };
const handleSubmit =(e)=>{
    e.preventDefault();
    //here i get value of url of input 
    let TextInput = document.getElementById('article-url').value;
    console.log(TextInput);
    if(Client.IsValidURL(TextInput)){
        console.log("::: Form Submitted :::");
        DataAnalysis({url:TextInput}).then((res)=>{
            updateUI(res);
        })
        
        
       
    }
    else{
        alert("InValid URL please enter correct URL");
    }
}

const updateUI = (res)=>{
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
    document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
    document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
    document.getElementById('score_tag').innerHTML=`score_Tag : ${res.score_tag};`;
    document.getElementById('polarity').innerHTML = 'Polarity: '+polarityChecker(res.score_tag);
}


const DataAnalysis = async (data)=>{
    console.log('Data Analaysis:', data);
    const response =  await getDataFromApi('http://localhost:8060/api',data);
    try {
        const CloudData = await response.json();
        console.log('Data received:', CloudData)
        return CloudData;
    } catch (error) {
        console.log('error : ', error);
    }
}

const getDataFromApi= async (url,data)=>{
    const dataFetched = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return dataFetched;
}


const polarityChecker = (score) => {
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display.toUpperCase();
}

export { handleSubmit }
export { polarityChecker }