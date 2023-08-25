pipeline{
    agent {
        docker {
            image 'node:latest'
            args '-u root'
        }
    }
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
        stage('Install Dependencies') {
            steps {
                sh 'yarn install'
            }
        }
    }
}