import * as cdk from '@aws-cdk/core';
import * as ecr from '@aws-cdk/aws-ecr'
import { ServiceStack } from './service';

export interface LocalDeploymentStageProps extends cdk.StageProps {

    repository: ecr.IRepository,
    
    imageTag: string,
}

export class LocalDeploymentStage extends cdk.Stage {

  constructor(scope: cdk.Construct, id: string, props: LocalDeploymentStageProps) {
    super(scope, id, props);

    const service = new ServiceStack(this, 'Service', {
        repository: props.repository,
        imageTag: props.imageTag,
    });
    

  }
}