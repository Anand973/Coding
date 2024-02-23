#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;
class Node{
    public:
    int data;
    Node* next;
    Node(int data){
this->data=data;
this->next=NULL;
    }
    ~Node(){
        int value=this->data;
      if(this->next!=NULL){
        delete next;
        this->next=NULL;
       

      }
      cout<<"this is freed"<<value<<endl;
    }
   
};

void insertatBegin(Node* &head,int d){
    Node* temp= new Node(d);
    temp->next=head;
    head=temp;
}
void insertatEnd(Node* &tail,int d){
    Node* temp=new Node(d);
    tail->next=temp;
    tail=temp;
}

void print(Node* &head){
    Node* temp=head;
    while(temp!=NULL){
        cout<<temp->data<<" ";
        temp=temp->next;
    }
}

void Del(Node* &head,int pos){
    if(pos==1){
        Node* temp=head;
        temp->next=NULL;
        delete temp;
    }
    Node* prev=NULL;
    Node* curr=head;
    int c=1;
    while(c<pos){
   prev=curr;
   curr=curr->next;
   c++;
    }
    prev->next=curr->next;
    curr->next=NULL;
    delete curr;
}
int main()
{ Node* n1=new Node(10);
cout<<n1->data<<endl;
Node* head=n1;
Node* tail=n1;
insertatBegin(head,20);
insertatEnd(tail,30);
print(head);
Del(head,2);
print(head);

   return 0;
}