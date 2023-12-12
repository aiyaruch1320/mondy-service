pipeline {
    agent any

    stages {
        stage('Install Node.js') {
            steps {
                script {
                    sh 'echo "Hello World"'
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
