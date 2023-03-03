pipeline {
  environment {
    registry = "sanju09/repo45"
    registryCredential = 'docker-hub-credentials'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/sanjucena/Angular.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Push Image to Hub') {
      steps{
        script {
          /* Finally, we'll push the image with two tags:
                   * First, the incremental build number from Jenkins
                   * Second, the 'latest' tag.
                   * Pushing multiple tags is cheap, as all the layers are reused. */
          docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
              dockerImage.push("${env.BUILD_NUMBER}")
              dockerImage.push("sanju09/repo45")
          }
        }
      }
    }
    //         sh 'kubectl apply -f deployment.yml'
    stage('Deploy to K8S'){
        steps{
        script{
            kubernetesDeploy (configs: 'deployment.yaml', kubeconfigId: 'k9sconfigpwd')
        }
        }
    }
  }
}