pipeline{
    agent any
    stages{
        stage('Get Commit Details') {
            steps {
                script {
                    sh(script: 'git log -1 --pretty=%B', returnStdout: true).trim()
                    sh(script: 'git log -1 --pretty=%an', returnStdout: true).trim()
                    sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                }
            }
        }
        stage('Build'){
            steps{
                echo 'Building the app'
            }
        }
        stage('Test'){
            steps{
                echo 'Testing the app'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying the app'
            }
        }
    }
}