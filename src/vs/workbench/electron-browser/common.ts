/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IWindowSettings } from 'vs/platform/windows/common/windows';

export interface IPath {
	filePath: string;
	lineNumber?: number;
	columnNumber?: number;
}

export interface IOpenFileRequest {
	filesToOpen?: IPath[];
	filesToCreate?: IPath[];
	filesToDiff?: IPath[];
}

export interface IWindowConfiguration {
	window: IWindowSettings;
}

export interface IStartupFingerprint {
	ellapsed: number;
	timers: {
		ellapsedWindowLoad?: number;
		ellapsedWindowLoadToRequire: number;
		ellapsedExtensions: number;
		ellapsedExtensionsReady: number;
		ellapsedRequire: number;
		ellapsedViewletRestore: number;
		ellapsedEditorRestore: number;
		ellapsedWorkbench: number;
	};
	platform: string;
	release: string;
	totalmem: number;
	freemem: number;
	cpus: { count: number; speed: number; model: string; };
	initialStartup: boolean;
	hasAccessibilitySupport: boolean;
	emptyWorkbench: boolean;
}