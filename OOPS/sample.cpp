#include<iostream>
using namespace std;

class Stack {
private:
    int top;
    int arr[5];
public:
    Stack() { top = -1; }

    bool isEmpty() {
        return (top == -1);
    }

    bool isFull() {
        return (top == 4);
    }

    void push(int value) {
        if (isFull()) {
            cout << "Stack is Full" << endl;
        } else {
            top++;
            arr[top] = value;
            cout << "Pushed " << value<<endl;
        }
    }

    int pop() {
        if (isEmpty()) {
            cout << "Stack is Empty" << endl;
            return -1;
        } else {
            int popped = arr[top];
            top--;
            cout << "Popped " << popped<< endl;
            return popped;
        }
    }
};

int main() {
    Stack s;
    s.push(1);
    s.push(2);
    s.push(3);
    s.push(4);
    s.push(5);

    cout << "Popped " << s.pop() << endl;
    cout << "Popped " << s.pop() << endl;

    return 0;
}

