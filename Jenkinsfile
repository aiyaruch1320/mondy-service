pipeline {
    agent {
        docker { image 'node:18.19.0' }
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'yarn install'
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
