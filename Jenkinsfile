pipeline {
    agent any
    stages {
        stage('Open') {
            steps {
                sh 'yarn run cy:open'
            }
        }
        stage('Test') {
             steps {
                        sh 'yarn run cy:run'
                    }
                }
            }
            post {
                always {
                    sh 'yarn cy:ci'
                }
            }
        }
    }
}