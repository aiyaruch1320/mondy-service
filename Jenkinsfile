pipeline {
    agent any

    stages {
        stage('Install Node.js') {
            agent {
                docker {
                    image 'node:18'
                    label 'my-docker-agent'
                }
            }
            steps {
                script {
                    sh 'node --version'
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful! Deploying...'
        }
        failure {
            echo 'Build failed! Notify the team...'
        }
    }
}
