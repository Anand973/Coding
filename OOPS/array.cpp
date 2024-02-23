#include<iostream>
using namespace std;

class Stack {
private:
    int top;
    int size;
    int* arr;

public:
    Stack(int size);
    ~Stack();

    void push(int val);
    int pop();
    bool isEmpty();
    bool isFull();
};

Stack::Stack(int size) {
    this->size = size;
    this->top = -1;
    this->arr = new int[size];
}

Stack::~Stack() {
    delete[] arr;
}

void Stack::push(int val) {
    if(isFull()) {
        cout << "Stack is full\n";
        return;
    }
    arr[++top] = val;
    cout << "Pushed: " << val << endl;
}

int Stack::pop() {
    if(isEmpty()) {
        cout << "Stack is empty\n";
        return -1;
    }
    int popped = arr[top--];
    cout << "Popped: " << popped << endl;
    return popped;
}

bool Stack::isEmpty() {
    return top == -1;
}

bool Stack::isFull() {
    return top == size - 1;
}

int main() {
    Stack stack(5);
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.pop();
    stack.pop();
    stack.pop();
    stack.pop();

    return 0;
}