pipeline {
    agent any
    //Add ansicolor for a better view
    options{
    ansiColor('xterm')
    }
    stages {
        stage('Open') {
            steps {
                nodejs('node-14.18.2')
                {
                sh 'yarn install'
                 }
                   }
        }
        stage('Test') {
             steps {
                 nodejs('node-14.18.2')
                 {
                 sh 'yarn cy:ci||true'
                 }
                   }

            post {
                always {
                    junit 'results/*.xml'
                }
            }
        }
    }
}