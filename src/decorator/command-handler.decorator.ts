import { Injectable, InjectableOptions } from '@nestjs/common';
import { randomUUID } from 'crypto';
import 'reflect-metadata';
import { ICommand } from 'src/command/command.interface';
import { COMMAND_HANDLER_METADATA, COMMAND_METADATA } from './metadata-constant';

/**
 * Decorator that marks a class as a Nest command handler. A command handler
 * handles commands (actions) executed by your application code.
 *
 * The decorated class must implement the `ICommandHandler` interface.
 *
 * @param command command *type* to be handled by this handler.
 * @param options injectable options passed on to the "@Injectable" decorator.
 *
 * @see https://docs.nestjs.com/recipes/cqrs#commands
 *
 * @publicApi
 */
export const CommandHandlerFactory = (
  command: ICommand | (new (...args: any[]) => ICommand),
  options?: InjectableOptions,
): ClassDecorator => {
  return (target: Function) => {
    if (!Reflect.hasOwnMetadata(COMMAND_METADATA, command)) {
      Reflect.defineMetadata(COMMAND_METADATA, { id: randomUUID() }, command);
    }
    Reflect.defineMetadata(COMMAND_HANDLER_METADATA, command, target);

    if (options) {
      Injectable(options)(target);
    }
  };
};

export function getCommandHandlerMetadata(target: any) {
  const refect = Reflect.getMetadata(COMMAND_HANDLER_METADATA, target);
  console.log("🚀 ~ getCommandHandlerMetadata ~ refect:", refect);
  
  // Get all metadata for this target
  const allKeys = Reflect.getMetadataKeys(target);
  console.log("All metadata keys for handler:", allKeys);
  
  const allMetadata = {};
  allKeys.forEach(key => {
    allMetadata[key.toString()] = Reflect.getMetadata(key, target);
  });
  console.log("All metadata for handler:", allMetadata);
  
  return refect;
}

export function getCommandMetadata(command: ICommand | (new (...args: any[]) => ICommand)) {
  const reflect = Reflect.getMetadata(COMMAND_METADATA, command);
  console.log("🚀 ~ getCommandMetadata ~ reflect:", reflect);
  // Get all metadata for this command
  const allKeys = Reflect.getMetadataKeys(command);
  console.log("All metadata keys for command:", allKeys);
  
  const allMetadata = {};
  allKeys.forEach(key => {
    allMetadata[key.toString()] = Reflect.getMetadata(key, command);
  });
  console.log("All metadata for command:", allMetadata);
  
  return reflect;
}

// Add a utility function to get all metadata for any object
export function getAllMetadata(target: any) {
  const allKeys = Reflect.getMetadataKeys(target);
  const allMetadata = {};
  
  allKeys.forEach(key => {
    allMetadata[key.toString()] = Reflect.getMetadata(key, target);
  });
  
  return { keys: allKeys, metadata: allMetadata };
}