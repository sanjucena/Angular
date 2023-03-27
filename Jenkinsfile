pipeline {
    environment {
        registry = "sanju09/repo45"
        registryCredential = 'docker-hub-credentials'
        dockerImage = ''
        // KUBECONFIG = credentials('kubernetes-config')
    }
    tools {nodejs "NODEJS"}
  agent any
  stages {
      stage('Clean Workspace'){
    steps{
        cleanWs()
    }
  }
    stage('Cloning Git') {
      steps {
        git 'https://github.com/sanjucena/Angular.git'
      }
    }
    
    stage('Install NPM Dependencies') {
      steps {
        // bat 'npm install'
        echo 'install'
      }
    }
    
    
    stage('Node Server Hosted') {
      steps {
        // bat 'npm run postbuild'
         echo 'npm run postbuild'
      }
    }
    
    stage('Run Tests') {
      parallel {
        stage('Unit tests') {
            steps { 
                // bat 'npm run test'
                 echo 'test'
                }
        }
        stage('Karma tests') {
            steps { 
                echo 'karma'
                // bat 'npm run test-karma'
                }
        }
        stage('e2e tests') {
          steps {
        //   bat 'npm run e2e'
         echo 'e2e'
          }
        }
        stage('Linting Analysis') {
            steps { 
                // bat 'npm run lint'
                echo 'lint'
                }
        }
      }
    }
    
    stage('Ansible') {
      steps {
         echo 'Ansible'
      }
    }
    
    stage('UCD') {
      steps {
         echo 'UCD'
      }
    }
    
    stage('artifactory') {
      steps {
         echo 'artifactory'
      }
    }
    
    stage('Helios') {
      steps {
         echo 'Helios'
      }
    }
    
    stage('SonarQube Analysis') {
        steps{
            script{
            // withSonarQubeEnv(credentialsId: 'sonar') {
            // bat "npm run sonar"
            // }
            echo 'SonarQube'
            }
    }
   }
   
   stage('Quality Gate Status') {
    steps {
        script {
            // waitForQualityGate abortPipeline: false, credentialsId: 'sonar'
            echo 'Quality Gates'
        }
    }
}

    stage('Nexus Repository') {
        steps {
            script {
                bat 'npm pack'
                // bat 'npm login --registry=http://a314-49-204-120-5.in.ngrok.io/repository/npm-private/'
                // bat 'Username:npmuser'
                // bat 'Password:npmuser'
                // bat 'Email:sanjucena09@gmail.com'
                // bat 'npm publish'
                echo 'Nexus'
                // nexusPublisher nexusInstanceId: 'MyNexus', 
                // nexusRepositoryId: '', 
                // packages: []
                // echo 'Nexus Again'
                nexusArtifactUploader artifacts: 
                [
                    [artifactId: 'front-end-angular-test', 
                    classifier: '', 
                    file: 'front-end-angular-test-0.0.4.tgz', 
                    type: 'tgz']
                ],
                credentialsId: 'NexusNpmUser', 
                groupId: 'com.group', 
                nexusUrl: '2ced-49-204-120-197.in.ngrok.io',
                nexusVersion: 'MyNexus', 
                protocol: 'http', 
                repository: 'npm-privateRepo', 
                version: '0.0.1-release'
                }
            }
        }
    
    // stage('Building image') {
    //   steps{
    //     script {
    //             bat 'docker build -t sanju09/repo47 .'
    //     }
    //   }
    // }
    
    // Log in to Docker
        //   withDockerRegistry([credentialsId: 'Jenkins-pwd', url: 'https://registry.hub.docker.com']) {
        //     docker.withRegistry( '', 'dockerhub' ) {
        //       // Build the Docker image
        //       def image = docker.build("my-image:${env.BUILD_NUMBER}")
              
        //     }
        //   }
          
stage('Building Docker Image') {
      steps{
        script {
        dockerImage = docker.build registry + ":$BUILD_NUMBER"
    }
      }
}

stage('Push Docker Image') {
      steps{
        script {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials'){
            dockerImage.push("${env.BUILD_NUMBER}")
            dockerImage.push("v5")
        }
        }
      }
}
          
    
    // stage('Push Image to Hub') {
    //   steps{
        // script {
    //             withCredentials([string(credentialsId: 'Jenkins-pwd', variable: 'variableJenkins')]) {
    //   bat 'docker login -u Sanju09 -p ${variableJenkins}'
    //      }
//       bat 'docker push sanju09/repo47'
// }
//           }
//         }

    stage('Deploy to K8S'){
        steps{
        script{
            // kubeConfig = readTrusted(kubernetesConfig)
            //         kubernetesDeploy(configs: kubeConfig, enableConfigSubstitution: true, namespace: 'default', secretNamespace: 'default', kubeConfig: "${KUBECONFIG}", showLogs: true, verifyDeployments: false, waitStrategy: 'podReady', recreateMode: 'Recreate')
                
            //  kubernetesDeploy(configs: 'deploymentService.yaml', kubeconfigId: 'kubernetes')
            // bat 'kubectl apply -f deployment.yaml'
            kubernetesDeploy (configs: 'deploymentService.yaml', kubeconfigId: 'kubeCC1')
        }
        }
    }
    
    stage('Openshift / OCP') {
    steps {
        script {
            echo 'OCP'
            }
        }
    }
    
    stage('DEV') {
    steps {
        script {
            echo 'dev'
            }
        }
    }
    
    stage('SIT / QA') {
    steps {
        script {
            echo 'sit / qa'
            }
        }
    }

stage('UAT') {
    steps {
        script {
            echo 'uat'
            }
        }
    }

stage('PRE-PROD / Staging') {
    steps {
        script {
            echo 'pre-prod / staging'
            }
        }
    }
    
stage('PROD') {
    steps {
        script {
            echo 'prod'
            }
        }
    }
}
    
}
    