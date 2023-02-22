pipeline {
    agent any
    stages {
        stage('Checkout') {
            git branch: 'master', url: 'https://github.com/sanjucena/Angular.git'
            }
        }
        stage('Install dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build -- --prod'
            }
        }
        stage('Deploy') {
            steps {
                bat 'xcopy /s /e /y dist\\* C:\\inetpub\\wwwroot\\'
            }
        }
    }

