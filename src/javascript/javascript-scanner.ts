/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {Node} from 'babel-types';

import {Scanner} from '../scanning/scanner';

import {Visitor} from './estree-visitor';
import {ParsedJavaScriptDocument} from './javascript-document';

export interface JavaScriptScanner extends
    Scanner<ParsedJavaScriptDocument, Node, Visitor>, Visitor {}
