pipeline {
    agent { docker { image 'node:18.16.1-alpine3.18' } }
    stages {
        stage('build') {
            steps {
                sh 'npm i && npm test'
            }
        }
    }
}