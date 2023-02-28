pipeline {

    environment {
        registry = "sanju09/repo45"
        registryCredential = 'docker-hub-credentials'
        dockerImage = ''
    }
agent any
    stage('Checkout') {
        git branch: 'master', url: 'https://github.com/sanjucena/Angular.git'
    }

    // stage('Install Dependencies') {
    //     bat 'npm install'
    // }

    // stage('Build') {
    //     bat 'npm run build'
    // }

    // stage('Test') {
    //     bat 'npm test'
    // }

    // stage('Deploy') {
    //     bat 'npm install -g firebase-tools'
    //     withCredentials([string(credentialsId: 'FIREBASE_TOKEN', variable: 'FIREBASE_TOKEN')]) {
    //         bat 'firebase deploy --token %FIREBASE_TOKEN%'
    //     }
    // }

stage('Building Docker Image') {
        dockerImage = docker.build registry + ":$BUILD_NUMBER"
    }

stage('Push Docker Image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials'){
            dockerImage.push("${env.BUILD_NUMBER}")
            dockerImage.push("latest")
        }
}
}