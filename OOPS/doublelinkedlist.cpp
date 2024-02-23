#include<iostream>
using namespace std;
class Node{
public:
int data;
Node* prev;
Node* next;
Node(int d){
    data=d;
    this->prev=NULL;
    this->next=NULL;
}
~Node(){
    int value=this->data;
    if(next!=NULL){
        delete next;
        next=NULL;
    }
    cout<<"this value is freed: "<<value<<endl;
}
};

void Delte(Node* &head,int p){
    if(p==1){
        Node* temp=head;
        temp->next->prev=NULL;
        head=temp->next;
        temp->next=NULL;
        delete temp;
    }
    else{
    Node* prev=NULL;
    Node* curr=head;
    int c=1;
    while(c<p){
         prev=curr;
        curr=curr->next;
        c++;
    }
curr->prev=NULL;
prev->next=curr->next;
curr->next=NULL;
delete curr;
    }

}
void insertatHead(Node* &head,int d){
Node* temp=new Node(d);
temp->next=head;
head->prev=temp;
head=temp;

}

void insertatTail(Node* &tail,int d){
    Node* temp=new Node(d);
    tail->next=temp;
    temp->prev=tail;
    tail=temp;
}

void insertatMid(Node* &tail,Node* &head,int pos,int d){
    if(pos==1){
        insertatHead(head,d);
        return;
    }
Node* temp=head;
int c=1;
while(c<pos-1){
    temp=temp->next;
    c++;
}
if(temp->next==NULL){
    insertatTail(tail,d);
    return;
}
Node*  nw= new  Node(d);
nw->next=temp->next;
temp->next->prev=nw;
temp->next=nw;
nw->prev=temp;

}
void print(Node* &head){
    Node* temp=head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
    cout<<endl;
}
int main(){
    Node* n1= new Node(1);
    cout<<n1->data<<endl;
    Node* head=n1;
    Node* tail=n1;
    insertatHead(head,0);
    print(head);
    insertatTail(tail,3);
    print(head);
    insertatMid(tail,head,3,2);
    print(head);
    insertatMid(tail,head,1,4);
    print(head);
    insertatMid(tail,head,6,5);
    print(head);
    Delte(head,1);
   print(head);


    return 0;

}
