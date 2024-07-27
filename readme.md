# simulatePrisoners

This repository contains a JavaScript function `simulatePrisoners` that simulates the well-known "100 prisoners and 100 boxes" problem. The function allows you to test different strategies to see how often the prisoners succeed in finding their own numbers in the boxes.

## Problem Description

In the "100 prisoners and 100 boxes" problem, there are 100 prisoners, each assigned a unique number from 1 to 100. There are also 100 boxes, each containing a slip of paper with a unique number from 1 to 100. The slips are randomly placed in the boxes. Each prisoner is allowed to open up to 50 boxes to find the slip with their own number. If all prisoners find their own number, they all go free. If even one prisoner fails, they all remain imprisoned.

## Function Description

The `simulatePrisoners` function simulates this problem for a given number of simulations and returns the number of successful simulations.

### Parameters

- `strategy` (boolean): If `true`, the prisoners follow a specific strategy where each prisoner starts with the box corresponding to their own number and then follows the number on the slip to the next box. If `false`, the prisoners randomly choose boxes to open.

### Returns

- `successCount` (number): The number of successful simulations where all prisoners found their own number.
