#include<iostream>
using namespace std;
class Node{
    public:
    int data;
    Node *next;
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
        cout<<"memory free from node of data"<<value<<endl;
    }

   
};
///////DELETION OF NODE/////////
void deleteNode(Node* &head,int pos){

    if(pos==1){
        Node* temp=head;
        head=head->next;
        temp->next=NULL;
        delete temp;
    }
    else{
        Node* prev= NULL;
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



   
}


/////DELEETION OF LAST ELEMENT///
Node* del(Node* head){
    if(head==NULL||head->next==NULL){
        cout<<-1;
    }
    Node* temp=head;
    while(temp->next->next!=NULL){
        temp=temp->next;
    }
    delete(temp->next);
    temp->next=NULL;
    return head;
    
}

////////DELETE OF KTH ELEMENT/////

Node* kdel(Node* head,int k){
    if(k==1){
        Node* temp=head;
        head=head->next;
        delete temp;
        return head;
    }
    int c=1;
    Node* temp=head;
    Node* prev=NULL;
    while(temp!=NULL){
        c++;
        if(c==k){
prev->next=prev->next->next;
delete temp;
break;
        }
        prev=temp;
        temp=temp->next;
    }
    return head;
}

///////INSERTION THROUGH END OR TAIL//////
void insertTail(Node* &tail,int d){
    Node* temp= new Node(d);
    tail->next=temp;
    tail=tail->next;
}

//////////INSERTION THROUGH HEAD OR START//////
void insertHead(Node* &head,int d){
        Node* temp= new Node(d);
        temp->next=head;
        head=temp;

    }
//////FOR PRINIING DATA///////
     void print(Node* &head){
        Node* temp=head;
        while(temp!=NULL){
            cout<<temp->data<<" ";
            temp=temp->next;
        }
     cout<<endl;

    }
////////INSERTION IN MIDDLE///////
    void insertatMid(Node* &tail,Node* &head,int pos,int d){

    if(pos==1){
        insertHead(head,d);
        return;
    }

    Node* temp=head;
    int c=1;
    while(c<pos-1){
        temp=temp->next;
        c++;
    }
if(temp->next==NULL){
        insertTail(tail,d);
        return;
    }
    Node *mid=new Node(d);
   mid->next=temp->next;
    temp->next=mid;

    
    
}

int main(){
    //CREATED A NODE 
    Node *node1= new Node(10);
  //  cout<<node1->data<<endl;
   // cout<<node1->next<<endl;
    //CREATED A NODE FOR INSERTION NODE
    Node* head=node1; 
    Node *tail=node1;
   // print(head);
    // insertHead(head,20);
    insertTail(tail,20);
    
 //print(head);
     insertTail(tail,30);
     print(head);
     insertatMid(tail,head,4,40);
     print(head);
     cout<<head->data<<endl;
     cout<<tail->data<<endl;

     deleteNode(head,2);
     print(head);

head=del(head);


    return 0;
}