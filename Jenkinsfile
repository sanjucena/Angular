

pipeline {
  environment {
    registry = "sanju09/repo45"
    registryCredential = 'docker-hub-credentials'
    dockerImage = ''
  }
  
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
    stage('Push Image') {
      steps{
        script {
          /* Finally, we'll push the image with two tags:
                   * First, the incremental build number from Jenkins
                   * Second, the 'latest' tag.
                   * Pushing multiple tags is cheap, as all the layers are reused. */
          docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
              dockerImage.push("${env.BUILD_NUMBER}")
              dockerImage.push("latest")
          }
        }
      }
    }
    // stage('Deploy to K8S'){
    //     steps{
    //         sh 'kubectl apply -f deployment.yml'
    //    }
    // }
  }
}