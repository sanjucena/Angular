node {
    stage('Checkout') {
        git branch: 'master', url: 'https://github.com/sanjucena/Angular.git'
    }

    stage('Install Dependencies') {
        bat 'npm install'
    }

    stage('Build') {
        bat 'npm build'
    }

    stage('Test') {
        bat 'npm test --watch=false --browsers=ChromeHeadlessCI'
    }

    stage('Deploy') {
        bat 'npm install -g firebase-tools'
        withCredentials([string(credentialsId: 'FIREBASE_TOKEN', variable: 'FIREBASE_TOKEN')]) {
            bat 'firebase deploy --token %FIREBASE_TOKEN%'
        }
    }
}
