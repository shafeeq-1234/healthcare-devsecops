pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t healthcare-app:1.0 .'
            }
        }

        stage('Container Security Scan') {
            steps {
                sh '''
                    docker run --rm \
                      -v /var/run/docker.sock:/var/run/docker.sock \
                      aquasec/trivy:latest \
                      image healthcare-app:1.0
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    kubectl apply -f deployment.yaml
                    kubectl rollout status deployment/healthcare-app
                '''
            }
        }
    }
}
