# Tracers

Tracers identify semantic content on the page, or generate additional semantics atop identified elements. They are the base rules that pull out semantic context.

Any given rule of any given @id should have at most one `selector` and any number of discriminators. Selectors pick out rootmost element. Discriminators further alter that selection. Predicates constrain the results. A Trace's selector must lead. Traces can refine other traces by using a TypeSelector.

Use #anchor to distinguish between different production rules for the same resource.

# Selectors

A selector is run against a document, selecting the root of semantic constructs it can identify. The new semantic context will be created as @type of the selectors's @id.

## Css Selector

Rule is type `https://archive.eldergods.com/selector/css`

Produce a selection via querySelector.

## XPath Selector

`https://archive.eldergods.com/selector/xpath`

Produce a selection via xpath.

## Style Selector

`https://archive.eldergods.com/selector/style`

Produce a selection via computed css styles.

## Thunk Selector

`https://archive.eldergods.com/selector/thunk`

The thunk function will immediately be invoked, and passed a single function it can use to produce values at it's leisure.

## Type Selector

`https://archive.eldergods.com/selector/type`

Select all objects identified of the matching type.

# Discriminators

Discriminators are passed a stream of selected objects (thereby acquiring a @type), and can alter the original selection or reject the selection

Decriminators rules require a `discriminator` in thier @type.

Information created via the discriminator will have a context type corresponding to the @id of the tracer.

## Css Discriminator

`https://archive.eldergods.com/discriminator/css`

For any selections passed, run this querySelector and select it's outputs.

## XPath Discriminator

`https://archive.eldergods.com/discriminator/xpath`

Find an xpath item/items to alter the selection to

##  Style Discriminator

`https://archive.eldergods.com/discriminator/style`

Pick all elements matching a certain style rule under the current selection.

# Predicates

Pass or fail the current selection. All predicate trace rules must have `predicate` in their @id.

## Css Predicate

`https://archive.eldergods.com/predicate/css`

Selection must return results from the css query or it will not be accepted.

## XPath Predicate

`https://archive.eldergods.com/predicate/xpath`

Selection must return results from the XPath or it will not be accepted.

## Style Predicate

`https://archive.eldergods.com/predicate/style`

Selection must find elements with all the qualifying styles or it will not be accepted.

## Type Predicate

`https://archive.eldergods.com/predicate/type`

Selection must be of a given type or it will not be accepted.

## Child Property Type Predicate

`https://archive.eldergods.com/predicate/descendant-type`

Selection must have a child of the given type or it will not be accepted.
