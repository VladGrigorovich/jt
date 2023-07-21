pipeline {
    agent { docker { image 'node:18.16.1-alpine3.18' } }
    stages {
        stage('build') {
            steps {
                sh 'chown -R 502:20 "/.npm" && npm i && npm test'
            }
        }
    }
}