#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CicdInfraStack } from '../lib/cicd-infra';

const app = new cdk.App();
new CicdInfraStack(app, 'CicdInfraStack', { env: { account: '822242914934', region: 'eu-west-1' } });

app.synth();
