import * as cdk from '@aws-cdk/core';
import { ServiceStack } from './service';

export class LocalDeploymentStage extends cdk.Stage {
  constructor(scope: cdk.Construct, id: string, stackProps?: cdk.StackProps, props?: cdk.StageProps) {
    super(scope, id, props);

    const services = new ServiceStack(this, 'Service', stackProps);
  }
}
