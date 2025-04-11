import { RESULT_TYPE_SYMBOL } from "../dragon-killer/constant";

export interface ICommand {}

/**
 * T represents the result type of the command
 */
export class Command<T> implements ICommand {
    readonly [RESULT_TYPE_SYMBOL]: T
}

/**
 * T represents the command type
 * TResult represents the result type of the command
 * 
 * If the command has a result type, TResult will be ignored
 */
export type CommandHandler<T extends ICommand = any, TResult = any> = 
    T extends Command<infer InferredCommandResult> ? {
        execute(data: T) : Promise<InferredCommandResult> 
    } : {
        execute(data: T) : Promise<TResult> 
    }