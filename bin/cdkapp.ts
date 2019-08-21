#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkappStack } from '../lib/cdkapp-stack';

const app = new cdk.App();
new CdkappStack(app, 'CdkappStack');
