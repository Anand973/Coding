#include<iostream>
#include<queue>
using namespace std;
class node{
    public:
    int data;
    node* left;
    node* right;
    node(int d){
        this->data=d;
        this->left=NULL;
        this->right=NULL;
    }
};

node* buildtree(node* root){
    cout<<"enter a number"<<endl;
int data;
cin>>data;
root= new node(data);
if(data==-1){
    return NULL;
}
cout<<"enter number on the left side of "<<data<<endl;
root->left=buildtree(root->left);
cout<<"enter number on the right side of "<<data<<endl;
root->right=buildtree(root->right);
return root;


}

void levelordert(node* root){
    queue<node*> q;
    q.push(root);
    q.push(NULL);
    while(!q.empty()){
        node* temp= q.front();
        q.pop();
        if(temp==NULL){
            cout<<endl;
            if(!q.empty()){
                q.push(NULL);
            }
        }
         
       else{
       
        if(temp->left){
            q.push(temp->left);
        }
        if(temp->right){
            q.push(temp->right);
        }
       }
    }
    
}

int main(){
    node* root=NULL;
    root=buildtree(root);
    levelordert(root);
    return 0;
}