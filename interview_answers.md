# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Functional components are really just JS functions that can take in props as an argument and return a react element. Stateful components implement stateful logic and make updates to state.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount and componentWillUpdate are no longer recommended by the React team and have been replaced by componentDidMount and componentDidUpdate. componentDidMount is invoked immediately after the component is mounted (componentWillMount was invoked right before). componentDidUpdate is invoked after an update occurs (i.e. changes to state or props). componentWillUpdate was invoked just before the updating.

3. Define stateful logic.

Stateful logic is any code that manipulates or updates state.

4. What are the three step of creating a successful test? What is done in each phase?

The three steps of creating a successful test are Arrange, Act, and Assert. During "arrange", we set up the test and the objects to be tested. During "act", we simulate user actions like typing in a field or clicking a submit button. Finally, we "assert" what the expected outcome of these actions should be.